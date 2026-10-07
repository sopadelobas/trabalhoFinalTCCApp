package br.dev.backendOng.domain.model;

import java.math.BigDecimal;
import java.util.Objects;
import java.util.UUID;

public class Meta {

    private UUID id;

    public BigDecimal quantidade;
    public BigDecimal porcentagem;
    
    public Meta() {
    }

    public Meta(UUID id, BigDecimal quantidade, BigDecimal porcentagem) {
        this.id = id;
        this.quantidade = quantidade;
        this.porcentagem = porcentagem;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public BigDecimal getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(BigDecimal quantidade) {
        this.quantidade = quantidade;
    }

    public BigDecimal getPorcentagem() {
        return porcentagem;
    }

    public void setPorcentagem(BigDecimal porcentagem) {
        this.porcentagem = porcentagem;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 59 * hash + Objects.hashCode(this.id);
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
        final Meta other = (Meta) obj;
        return Objects.equals(this.id, other.id);
    }
    
    
}
