package com.nyaina.back.services;

import com.nyaina.back.models.Position;
import com.nyaina.back.models.Reservation;
import com.nyaina.back.repositories.PositionRepository;
import com.nyaina.back.repositories.ReservationRepository;
import com.nyaina.back.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.mail.internet.AddressException;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ReservationService {
    private final ReservationRepository repository;
    private final PositionRepository positionRepository;
    private final UserRepository userRepository;

    public Reservation save(Integer id_place,
                            Integer id_user,
                            Date date_res,
                            Date date_deb,
                            Date date_fin) throws AddressException {
        var reservedPosition = positionRepository.findById(id_place).orElseThrow(() -> new EntityNotFoundException("Position not found"));
        var user = userRepository.findById(id_user).orElseThrow();
        var updatedPosition = positionRepository.save(Position.builder()
                .id(reservedPosition.getId())
                .capacite(reservedPosition.getCapacite())
                .localisation(reservedPosition.getLocalisation())
                .numero(reservedPosition.getNumero())
                .prix_i(reservedPosition.getPrix_i())
                .nom_agence(reservedPosition.getNom_agence())
                .statut("reserve")
                .build());
        // Example usage
        String username = "ralyandrynyainakadmiel@gmail.com";
        String password = "your_password";
        MailService mailService = new MailService(username, password);

        String to = user.getEmail();
        String subject = "Message from  the Admin";
        Double sum = (updatedPosition.getPrix_i() * 25 / 100);
        String body = "You must pay " + sum + " for advance";
        mailService.sendEmail(to, subject, body);
        return repository.save(Reservation.builder()
                .user(user)
                .position(updatedPosition)
                .date_fin(date_fin)
                .date_deb(date_deb)
                .date_res(date_res)
                .build()
        );
    }

    public String deleteById(Integer id) {
        repository.deleteById(id);
        return "Reservation deleted successfully";
    }

    public Reservation getById(Integer id) {
        var reservation = repository.findById(id);
        if (reservation.isEmpty()) return new Reservation(null, null, null, null, null, null, null, null);
        return reservation.orElseThrow(() -> new EntityNotFoundException("Reservation not found"));
    }

    public List<Reservation> getAll() {
        return repository.findAll();
    }
}
