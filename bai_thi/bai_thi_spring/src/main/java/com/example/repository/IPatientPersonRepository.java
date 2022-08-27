package com.example.repository;

import com.example.model.PatientPerson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IPatientPersonRepository extends JpaRepository<PatientPerson, Integer> {

    @Query(value = "select * from patient_person", nativeQuery = true)
    List<PatientPerson> getAllPatientPerson();
}
