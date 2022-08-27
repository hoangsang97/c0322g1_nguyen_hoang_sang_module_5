package com.example.service.impl;

import com.example.model.PatientCode;
import com.example.repository.IPatientCodeRepository;
import com.example.service.IPatientCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientCodeServiceImpl implements IPatientCodeService {

    @Autowired
    private IPatientCodeRepository patientCodeRepository;


    @Override
    public List<PatientCode> findAllPatientCode() {
        return patientCodeRepository.getAllPatientCode();
    }
}
