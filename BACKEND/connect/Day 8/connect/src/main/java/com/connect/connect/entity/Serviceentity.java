package com.connect.connect.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "TrainerForm")
public class Serviceentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name",nullable = false)              
    private String name;

    @Column(name = "Email address",nullable = false)
    private String email;

    @Column(name = "Mobile number",nullable = false)
    private Long mobile ;

    @Column(name = "Trainer Name",nullable = false)
    private String trainer;

    @Column(name = "Goal",nullable = false)
    private String goal;

}