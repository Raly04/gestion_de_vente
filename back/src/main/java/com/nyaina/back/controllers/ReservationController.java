package com.nyaina.back.controllers;

import com.nyaina.back.models.Reservation;
import com.nyaina.back.requestModels.ReservationRequestModel;
import com.nyaina.back.services.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.mail.internet.AddressException;
import java.net.URI;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Controller
@RequestMapping("/reservation")
public class ReservationController {
    private final ReservationService service;

    @PostMapping("/save")
    public ResponseEntity<Reservation> save (@RequestBody ReservationRequestModel requestModel, UriComponentsBuilder uriComponentsBuilder) {
        try {
            // Save the reservation using the service
            var savedReservation = service.save(requestModel.getId_place(), requestModel.getId_user(), new Date(), requestModel.getDate_deb(), requestModel.getDate_fin());
            // Build the URI for the newly created resource
            URI location = uriComponentsBuilder
                    .path("/reservations/{id}")
                    .buildAndExpand(savedReservation.getId())
                    .toUri();
            return ResponseEntity.created(location).body(savedReservation);
        } catch (AddressException e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete (@PathVariable("id") Integer id) {
        try {
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Reservation> getById (@PathVariable("id") Integer id) {
        try {
            return ResponseEntity.ok(service.getById(id));
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Reservation>> getAll () {
        try {
            return ResponseEntity.ok(service.getAll());
        } catch (Exception e) {
            return ResponseEntity.status(500).build();
        }
    }
}
