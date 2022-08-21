package web_service_case_study.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import web_service_case_study.module.Customer;

import javax.transaction.Transactional;

@Transactional
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

    @Modifying
    @Query(value = "update customer set customer_type_id = :customer_type_id, name = :name, date_of_birth =:date_of_birth, gender =:gender, " +
            " id_card =:id_card, phone_number =:phone_number, email =:email, address =:address where id =:id", nativeQuery = true)
    void update(@Param("customer_type_id") int customer_type_id, @Param("name") String name, @Param("date_of_birth") String date_of_birth,
                @Param("gender") boolean gender, @Param("id_card") String id_card, @Param("phone_number") String phone_number, @Param("email") String email,
                @Param("address") String address, @Param("id") int id);
}
