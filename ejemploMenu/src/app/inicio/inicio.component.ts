import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{

  //private route = inject(ActivatedRoute);
  // private id: string | null ='';


  productos=[
    {"productoId": "1",
    "nombre": "Teclado Microsoft",
    "descripcion": "Teclado Microsoft con teclas especiales",
    "imagen": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRp7-HmFX9aR0-8I90bAQVO7YflbuWKqEILmKrIqifBVjsTQV-tNvEZgwDiykr6RojEbanrQFovmWfoLp7SBx23l6Kk-8mkCFTz7JmYZD3GFO8zoKfIu2OJ-QmJ0qELiw&usqp=CAc",
    "precio": 45
   },
   {"productoId": "2",
    "nombre": "Ratón Microsoft",
    "descripcion": "Ratón Microsoft con teclas especiales",
    "imagen": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRp7-HmFX9aR0-8I90bAQVO7YflbuWKqEILmKrIqifBVjsTQV-tNvEZgwDiykr6RojEbanrQFovmWfoLp7SBx23l6Kk-8mkCFTz7JmYZD3GFO8zoKfIu2OJ-QmJ0qELiw&usqp=CAc",
    "precio": 25
   },
   {"productoId": "3",
    "nombre": "USB 3.0",
    "descripcion": "USB 3.0 de 32GB",
    "imagen": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRp7-HmFX9aR0-8I90bAQVO7YflbuWKqEILmKrIqifBVjsTQV-tNvEZgwDiykr6RojEbanrQFovmWfoLp7SBx23l6Kk-8mkCFTz7JmYZD3GFO8zoKfIu2OJ-QmJ0qELiw&usqp=CAc",
    "precio": 10
   }
  ]

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.getId("id");
  }

}
