import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { Product } from '@sernanp/models'
import { HttpClientModule } from '@angular/common/http';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the remote products list', () => {
    // Arrange    
    const sampleProduct: Product = {
        "id": 1,
        "name": "Synergistic Paper Gloves",
        "description": "Illo vetus tempore somniculosus angelus vos curvus supplanto tenuis pariatur ratione claro depereo suasoria vilitas advoco taedium quis canis tergo non suffragium necessitatibus amissio thermae voco cometes nemo ipsam vicissitudo ut audax talus cilicium utilis.",
        "image": "https://loremflickr.com/250/250",
        "price": "19662.8",
        "discount_amount": "8616.7",
        "status": true,
        "categories": [
        {
        "id": 1,
        "name": "Sports, Movies & Kids"
        },
        {
        "id": 13,
        "name": "Clothing, Electronics & Industrial"
        },
        {
        "id": 6,
        "name": "Clothing & Electronics"
        },
        {
        "id": 11,
        "name": "Health"
        }
        ]
        };

    // Act
    // products = service.getProducts(); //?
    service.getProducts().subscribe( (products: Product[]) => {
      products; // ?

      // Assert
    expect(products.length).toBeGreaterThan(0);
    expect(products[0]).toBe(sampleProduct);

    });



  });

  it.skip('should get an empty products list', () => {
    // Arrange
    let products: unknown[] = [];

    // Act
    products = service.getProducts();

    // Assert
    expect(products.length).toBe(0);
    expect(service.error).toBe(true);
    
  });
});
