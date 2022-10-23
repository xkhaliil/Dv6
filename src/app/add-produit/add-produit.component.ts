import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produits.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  message :string ="";
  newProduit = new Produit();
 
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
  }

  addProduit(){
   this.produitService.ajouterProduit(this.newProduit);
   this.message = "Produits "+this.newProduit.nomProduit +" ajouté avec succés !" ;
   }

}
