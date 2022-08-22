package web_service_case_study.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import web_service_case_study.module.Customer;
import web_service_case_study.repository.ICustomerRepository;
import web_service_case_study.service.ICustomerService;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements ICustomerService {

    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> findById(int id) {
        return customerRepository.findById(id);
    }

    @Override
    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void update(int id, Customer customer) {
        customerRepository.update(customer.getCustomerType().getId(), customer.getName(), customer.getDateOfBirth(), customer.getGender()
                , customer.getIdCard(), customer.getPhoneNumber(), customer.getEmail(), customer.getAddress(), id);
    }

    @Override
    public void remove(int id) {
        customerRepository.deleteById(id);
    }

    @Override
    public List<Customer> search(String name, int id) {
        return customerRepository.search("%" + name + "%", id);
    }
}
