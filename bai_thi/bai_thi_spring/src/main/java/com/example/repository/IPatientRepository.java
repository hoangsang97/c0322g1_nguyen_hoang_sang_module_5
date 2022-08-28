package com.example.repository;

import com.example.model.Patient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface IPatientRepository extends JpaRepository<Patient, Integer> {

    @Query(value = "select * from patient where status = 0", nativeQuery = true)
    Page<Patient> getAllPatient(Pageable pageable);

    @Query(value = "select * from patient where id = :id and status = 0", nativeQuery = true)
    Patient findById(@Param("id") int id);

    @Modifying
    @Query(value = "insert into patient (`name`, hospitalized, discharge, reason, cure, doctor, patient_code_id, patient_person_id, status) " +
            " values (:name, :hospitalized, :discharge, :reason, :cure, :doctor, :patientCode, :patientPerson, 0)", nativeQuery = true)
    void save(@Param("name") String name, @Param("hospitalized") String hospitalized, @Param("discharge") String discharge, @Param("reason") String reason,
              @Param("cure") String cure, @Param("doctor") String doctor, @Param("patientCode") int patientCode, @Param("patientPerson") int patientPerson);

    @Modifying
    @Query(value = "update patient set `name` = :name, hospitalized = :hospitalized, discharge = :discharge," +
            " reason = :reason, cure = :cure, doctor = :doctor where id = :id", nativeQuery = true)
    void update(@Param("name") String name, @Param("hospitalized") String hospitalized, @Param("discharge") String discharge, @Param("reason") String reason,
                @Param("cure") String cure, @Param("doctor") String doctor, @Param("id") int id);

    @Query(value = "update patient set status = 1 where id = :id", nativeQuery = true)
    void delete(@Param("id") int id);

    @Query(value = "select * from patient where `name` like :name and status = 0", nativeQuery = true)
    Page<Patient> search(@Param("name") String name, Pageable pageable);
}
