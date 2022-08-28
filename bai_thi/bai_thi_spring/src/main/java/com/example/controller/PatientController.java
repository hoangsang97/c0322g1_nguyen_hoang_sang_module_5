package com.example.controller;

import com.example.dto.PatientDto;
import com.example.model.Patient;
import com.example.model.PatientCode;
import com.example.model.PatientPerson;
import com.example.service.impl.PatientCodeServiceImpl;
import com.example.service.impl.PatientPersonServiceImpl;
import com.example.service.impl.PatientServiceImpl;
import com.example.validation.PatientDtoValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin(origins = "*")
public class PatientController {

    @Autowired
    private PatientServiceImpl patientService;

    @Autowired
    private PatientCodeServiceImpl patientCodeService;

    @Autowired
    private PatientPersonServiceImpl patientPersonService;

    @Autowired
    private PatientDtoValidation patientDtoValidation;

    @GetMapping("/patients/list")
    public ResponseEntity<Page<Patient>> getAllPatient(@PageableDefault(value = 2) Pageable pageable) {
        Page<Patient> patients = patientService.findAll(pageable);
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @GetMapping("/patientCode/list")
    public ResponseEntity<List<PatientCode>> getAllPatientCode() {
        List<PatientCode> patientCodes = patientCodeService.findAllPatientCode();
        return new ResponseEntity<>(patientCodes, HttpStatus.OK);
    }

    @GetMapping("/patientPerson/list")
    public ResponseEntity<List<PatientPerson>> getAllPatientPerson() {
        List<PatientPerson> patientPersons = patientPersonService.findAllPatientPerson();
        return new ResponseEntity<>(patientPersons, HttpStatus.OK);
    }

    @GetMapping("/patients/{id}")
    public ResponseEntity<Patient> getPatient(@PathVariable int id) {
        Patient patient = patientService.findById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @PostMapping("/patients")
    public ResponseEntity<Void> createPatient(@RequestBody Patient patient) {
        patientService.save(patient);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("patients/{id}")
    public ResponseEntity<?> updatePatient(@RequestBody @Valid PatientDto patientDto, BindingResult bindingResult,
                                           @PathVariable int id) {
        Patient patient = patientService.findById(id);

        patientDtoValidation.validate(patientDto, bindingResult);

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NOT_MODIFIED);
        }

        if (patient == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        patientService.edit(id, patient);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @DeleteMapping("patients/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable int id) {
        patientService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("patients/search")
    public ResponseEntity<Page<Patient>> searchPatient(@RequestParam String namePatient,
                                                       @PageableDefault(value = 2) Pageable pageable) {
        Page<Patient> patients = patientService.search(namePatient, pageable);
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }
}
