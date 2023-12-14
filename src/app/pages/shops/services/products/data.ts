import { BookModel } from "../../models/book.model";
import { CategoryModel } from "../../models/category.model";

export const categories:CategoryModel[]=[
    {
      category_id:0,
      name:{
        uz:'Tarixiy',
        ru:"Исторический"
      }
    },
    {
        category_id:1,
        name:{
          uz:'Badiiy',
          ru:"Художественный"
        }
      },
      {
        category_id:2,
        name:{
          uz:'Hajviy',
          ru:"Забавный"
        }
      },
]
export const books:BookModel[]=[
    {
        id:0,
        category_id:0,
        title:"Temur tuzuklari",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:60000,
        promotion_price:50000,
        image:"assets/img/books/01.jpg",
        rate:5
    },
    {
        id:1,
        category_id:0,
        title:"Yulduzli tunlar",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:120000,
        promotion_price:80000,
        image:"assets/img/books/02.jpg",
        rate:4

    },
    {
        id:2,
        category_id:2,
        title:"Besh bolali yigitcha",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:80000,
        promotion_price:50000,
        image:"assets/img/books/03.jpg",
        rate:4

    },
    {
        id:3,
        category_id:0,
        title:"Temur tuzuklari",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:60000,
        promotion_price:50000,
        image:"assets/img/books/01.jpg",
        rate:3

    },
    {
        id:4,
        category_id:1,
        title:"O'tgan kunlar",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:60000,
        promotion_price:50000,
        image:"assets/img/books/04.jpg",
        rate:4
    },
    {
        id:5,
        category_id:1,
        title:"Kichik shahzoda",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:90000,
        promotion_price:70000,
        image:"assets/img/books/05.jpg",
        rate:3

    },
    {
        id:6,
        category_id:2,
        title:"Temur tuzuklari",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:60000,
        promotion_price:50000,
        image:"assets/img/books/01.jpg",
        rate:5

    },
    {
        id:7,
        category_id:2,
        title:"Hajviy hikoyalar",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:100000,
        promotion_price:70000,
        image:"assets/img/books/07.jpg",
        rate:4

    },
    {
        id:8,
        category_id:0,
        title:"O'zbekiston tarixi",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:90000,
        promotion_price:50000,
        image:"assets/img/books/08.jpg",
        rate:2

    },
    {
        id:9,
        category_id:1,
        title:"Temur tuzuklari",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:60000,
        promotion_price:50000,
        image:"assets/img/books/01.jpg",
        rate:4

    },
    {
        id:10,
        category_id:2,
        title:"Bandi bandit",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:60000,
        promotion_price:50000,
        image:"assets/img/books/010.jpg",
        rate:1

    },
    {
        id:11,
        category_id:0,
        title:"Temur tuzuklari",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nulla quaerat, placeat sunt accusantium laborum perferendis. Beatae, laboriosam asperiores? Fuga architecto tempore reprehenderit cumque voluptatibus pariatur rem, nihil est totam delectus voluptatum in a vel, modi labore repellat eos ipsa repudiandae enim quod! Deleniti cumque fugit sed velit deserunt distinctio cum non earum placeat, similique maiores facilis impedit, corporis consequatur ipsa, veritatis odit ipsum voluptate rem accusantium dolor? Animi quisquam iste mollitia quia, illum tenetur iure consequatur, error fugit libero est ab, illo modi expedita nesciunt fuga fugiat! Consequatur, soluta ducimus quaerat illo voluptatibus provident nihil neque tenetur molestiae ut in nam nisi optio vel magnam iure deserunt veritatis ullam aspernatur fugit dolor nobis. Ipsam vitae nesciunt facere dolorem. Sequi, voluptatibus amet quisquam minima, magnam quas officia delectus quidem laborum dolores consectetur iusto suscipit. Reiciendis amet possimus necessitatibus consequatur nesciunt, quidem, vitae atque odio minus dolore inventore hic quasi soluta qui molestias officiis accusantium culpa? Quaerat vitae libero unde. Alias saepe in, quae esse blanditiis similique quidem perspiciatis non ex animi dignissimos, quo quas consequuntur ipsum cupiditate tempore atque, dolorum molestias. Deleniti quae, totam impedit officia ipsum sunt commodi! Provident numquam sed eaque, eligendi quasi quidem qui consequatur illo perspiciatis.",
        price:60000,
        promotion_price:50000,
        image:"assets/img/books/01.jpg",
        rate:4.5

    }
]