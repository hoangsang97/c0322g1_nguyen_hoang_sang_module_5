package com.example.service.impl;

import com.example.model.PatientPerson;
import com.example.repository.IPatientPersonRepository;
import com.example.service.IPatientPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientPersonServiceImpl implements IPatientPersonService {

    @Autowired
    private IPatientPersonRepository patientPersonRepository;

    @Override
    public List<PatientPerson> findAllPatientPerson() {
        return patientPersonRepository.getAllPatientPerson();
    }
}
