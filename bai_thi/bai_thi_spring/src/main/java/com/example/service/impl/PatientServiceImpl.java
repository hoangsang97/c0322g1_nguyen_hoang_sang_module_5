package com.example.service.impl;

import com.example.model.Patient;
import com.example.repository.IPatientRepository;
import com.example.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PatientServiceImpl implements IPatientService {

    @Autowired
    private IPatientRepository patientRepository;

    @Override
    public Page<Patient> findAll(Pageable pageable) {
        return patientRepository.getAllPatient(pageable);
    }

    @Override
    public Optional<Patient> findById(int id) {
        return patientRepository.findById(id);
    }

    @Override
    public void save(Patient patient) {
//        patientRepository.save(patient.getName(), patient.getHospitalized(), patient.getDischarge(),
//                patient.getReason(), patient.getCure(), patient.getDoctor(), patient.getPatientCode().getId(), patient.getPatientPerson().getId());
        patientRepository.save(patient);
    }

    @Override
    public void edit(int id, Patient patient) {
        patientRepository.update(patient.getName(), patient.getHospitalized(), patient.getDischarge(),
                patient.getReason(), patient.getCure(), patient.getDoctor());
    }

    @Override
    public void delete(int id) {
        patientRepository.deleteById(id);
    }

    @Override
    public Page<Patient> search(String name, Pageable pageable) {
        return patientRepository.search(name, pageable);
    }
}
