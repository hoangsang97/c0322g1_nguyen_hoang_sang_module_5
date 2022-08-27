package com.example.repository;

import com.example.model.PatientCode;
import com.example.model.PatientPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IPatientCodeRepository extends JpaRepository<PatientCode, Integer> {

    @Query(value = "select * from patient_code", nativeQuery = true)
    List<PatientCode> getAllPatientCode();
}
