package com.example.controller;

import com.example.model.Patient;
import com.example.service.impl.PatientServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("patient")
@CrossOrigin
public class PatientController {

    @Autowired
    private PatientServiceImpl patientService;

    @GetMapping("")
    public ResponseEntity<Page<Patient>> getAll(Pageable pageable) {
        Page<Patient> patients = patientService.findAll(pageable);
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }
}
