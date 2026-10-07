/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package br.dev.backendOng.domain.controller;

import br.dev.backendOng.domain.model.Projeto;
import br.dev.backendOng.domain.repository.MetaRepository;
import br.dev.backendOng.domain.repository.ProjetoRepository;
import br.dev.backendOng.domain.service.ProjetoService;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;


public class ProjetoController {

@Autowired
 private ProjetoService projetoService;

@Autowired
 private ProjetoRepository projetoRepository;

@Autowired
 private MetaRepository metaRepository;

 @PostMapping
 public Projeto criar(@RequestBody Projeto projeto) {
     return projetoService.criar(projeto);
 }
 @DeleteMapping
 public ResponseEntity<Void> excluir(@PathVariable UUID projetoUUID) {
     if (!projetoRepository.existsByUUID(projetoUUID)) {
         return ResponseEntity.notFound().build();
     }
     
     projetoService.excluir(projetoUUID);
     return ResponseEntity.noContent().build();
 }

}
