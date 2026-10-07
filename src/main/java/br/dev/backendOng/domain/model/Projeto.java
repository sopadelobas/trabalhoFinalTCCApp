
package br.dev.backendOng.domain.model;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.UUID;

public class Projeto {
    
    private UUID id;
    private Meta meta; 
    private LocalDate dataAbertura;
    private LocalDateTime prazo;
    private String doacaoRecebida;

    public Projeto() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public Meta getMeta() {
        return meta;
    }

    public void setMeta(Meta meta) {
        this.meta = meta;
    }

    public LocalDate getDataAbertura() {
        return dataAbertura;
    }

    public void setDataAbertura(LocalDate dataAbertura) {
        this.dataAbertura = dataAbertura;
    }

    public LocalDateTime getPrazo() {
        return prazo;
    }

    public void setPrazo(LocalDateTime prazo) {
        this.prazo = prazo;
    }

    public String getDoacaoRecebida() {
        return doacaoRecebida;
    }

    public void setDoacaoRecebida(String doacaoRecebida) {
        this.doacaoRecebida = doacaoRecebida;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Projeto other = (Projeto) obj;
        return Objects.equals(this.id, other.id);
    }

    public Projeto(UUID id, Meta meta, BigDecimal porcentagem, LocalDate dataAbertura, LocalDateTime prazo, String doacaoRecebida) {
        this.id = id;
        this.meta = meta;
        this.dataAbertura = dataAbertura;
        this.prazo = prazo;
        this.doacaoRecebida = doacaoRecebida;
    }
    
    
}
