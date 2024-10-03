import { promises as fs } from 'fs';

export default async function Products(){
    const file = await fs.readFile(process.cwd() + '/app/components/json/products.json', 'utf8');
    const data = JSON.parse(file);

    return(
        <section className="flex products-container">
            <h1 className="section-text">Top bestsellers</h1>
            <div className="product-list flex gap flex-start">
                {data.map((data) => (
                    <div className="product search gap">
                        <img src={data.coverImage} alt="cover picture" className="book-image" key={data.id}/>
                        <h3 className="title align-center">{data.title}</h3>
                        <p className="text-center title align-center" key={data.author}>{data.author}</p>
                        <button className="align-center">Buy now</button>
                    </div>
                ))}
            </div>
        </section>
    )
}