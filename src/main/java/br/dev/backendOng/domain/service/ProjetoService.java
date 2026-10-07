
package br.dev.backendOng.domain.service;

import br.dev.backendOng.domain.model.Projeto;
import br.dev.backendOng.domain.repository.ProjetoRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;

public class ProjetoService {

    @Autowired
    private ProjetoRepository projetoRepository;
    
    public Projeto criar(Projeto projeto) {
        projeto.setDataAbertura(LocalDate.now());
        
        return projetoRepository.save(projeto);
    }
    
    public void excluir(UUID projetoUUID) {
        projetoRepository.deleteByUUID(projetoUUID);
    }
    
    public List<Projeto> listarTodos() {
        return projetoRepository.findAll();
    }
    public Projeto atualizar(Projeto projeto) {
        return projetoRepository.save(projeto);
    }

}
