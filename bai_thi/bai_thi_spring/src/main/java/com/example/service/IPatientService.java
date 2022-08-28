package com.example.service;

import com.example.model.Patient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IPatientService {
    Page<Patient> findAll(Pageable pageable);

    Patient findById(int id);

    void save(Patient patient);

    void edit(int id, Patient patient);

    void delete(int id);

    Page<Patient> search(String name, Pageable pageable);
}
