package com.nyaina.back.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity(name = "payements")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Payement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Double montant;
    private String numero;
    private String description;
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "reservation_id")
    private Reservation reservation;
    @CreationTimestamp
    private Date date;
    private String type;
}
