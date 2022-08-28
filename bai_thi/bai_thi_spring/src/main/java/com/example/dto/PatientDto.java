package com.example.dto;

public class PatientDto {
    private int id;
    private String name;
    private String hospitalized;
    private String discharge;
    private String reason;
    private String cure;
    private String doctor;

    public PatientDto() {
    }

    public PatientDto(int id, String name, String hospitalized, String discharge, String reason, String cure, String doctor) {
        this.id = id;
        this.name = name;
        this.hospitalized = hospitalized;
        this.discharge = discharge;
        this.reason = reason;
        this.cure = cure;
        this.doctor = doctor;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHospitalized() {
        return hospitalized;
    }

    public void setHospitalized(String hospitalized) {
        this.hospitalized = hospitalized;
    }

    public String getDischarge() {
        return discharge;
    }

    public void setDischarge(String discharge) {
        this.discharge = discharge;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getCure() {
        return cure;
    }

    public void setCure(String cure) {
        this.cure = cure;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }
}
