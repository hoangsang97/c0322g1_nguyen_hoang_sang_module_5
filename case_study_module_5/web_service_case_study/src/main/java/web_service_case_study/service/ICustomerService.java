package web_service_case_study.service;

import web_service_case_study.module.Customer;

import java.util.List;
import java.util.Optional;

public interface ICustomerService {
    List<Customer> findAll();

    Optional<Customer> findById(int id);

    void save(Customer customer);

    void update(int id, Customer customer);

    void remove(int id);
}
