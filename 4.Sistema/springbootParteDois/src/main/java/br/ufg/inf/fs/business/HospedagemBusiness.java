package br.ufg.inf.fs.business;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.ufg.inf.fs.entities.Hospedagem;
import br.ufg.inf.fs.repositories.HospedagemRepository;
import br.ufg.inf.fs.exceptions.HospedagemException;
import java.util.List;
import java.util.Optional;

@Service
public class HospedagemBusiness {

    @Autowired
    HospedagemRepository repository;

    public List<Hospedagem> findAll() {
        return this.repository.findAll();
    }

    public Hospedagem findById(Integer id) {
        Optional<Hospedagem> optHospedagem = this.repository.findById(id);
        Hospedagem hospedagem = optHospedagem.get();
        return hospedagem;
    }

    public Hospedagem insert(Hospedagem hospedagem) throws HospedagemException {
    	this.validaHospedagem(hospedagem);
        return this.repository.save(hospedagem);
    }

    public Hospedagem update(Hospedagem hospedagem) throws HospedagemException {
    	this.validaHospedagem(hospedagem);
    	return this.repository.save(hospedagem);
    }

    public void delete(Integer id) {
        this.repository.deleteById(id);
    }
    
    public List<Hospedagem> findIdHospedagem(Integer qtd){
		return repository.findByIdHospedagem(qtd);
	}
    
    private void validaHospedagem(Hospedagem hospedagem) throws HospedagemException {
    	if(hospedagem.getDtCheckin() == null) {
            throw new HospedagemException("0309");
        }
        if(hospedagem.getDtCheckout() == null) {
            throw new HospedagemException("0310");
        }
	}
    
    
}
