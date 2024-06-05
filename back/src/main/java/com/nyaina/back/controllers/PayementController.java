package com.nyaina.back.controllers;

import com.nyaina.back.models.Payement;

import java.lang.Exception;

import com.nyaina.back.services.PayementService;
import com.nyaina.back.services.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@Controller
@RequestMapping("/payement")
public class PayementController {
    private final PayementService service;

    @PostMapping("/save")
    public ResponseEntity<Payement> save(@RequestBody Payement payement, UriComponentsBuilder uriComponentsBuilder) {
        try {
            // Save the user using the service
            var savedPayement = service.save(payement);
            // Build the URI for the newly created resource
            URI location = uriComponentsBuilder
                    .path("/payements/{id}")
                    .buildAndExpand(savedPayement.getId())
                    .toUri();
            return ResponseEntity.created(location).body(savedPayement);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Payement>> getAll() {
        try {
            return ResponseEntity.ok(service.getAll());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
