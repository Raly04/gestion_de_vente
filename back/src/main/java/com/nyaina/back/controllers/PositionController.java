package com.nyaina.back.controllers;

import com.nyaina.back.models.Position;
import com.nyaina.back.services.PositionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RequiredArgsConstructor
@Controller
@RequestMapping("/position")
public class PositionController {
    private final PositionService service;
    @PostMapping("/save")
    public ResponseEntity<Position> save (@RequestBody Position position , UriComponentsBuilder uriComponentsBuilder) {
        // Save the user using the service
        var savedPosition = service.save(position);
        // Build the URI for the newly created resource
        URI location = uriComponentsBuilder
                .path("/users/{id}")
                .buildAndExpand(savedPosition.getId())
                .toUri();
        return ResponseEntity.created(location).body(savedPosition);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete (@PathVariable("id") Integer id ) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Position> getById (@PathVariable("id") Integer id) {
        return  ResponseEntity.ok(service.getById(id));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Position>> getAll () {
        return ResponseEntity.ok(service.getAll());
    }
}
