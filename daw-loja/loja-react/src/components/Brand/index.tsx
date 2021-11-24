import { Brand } from '../../@types';
import'.style.css';


type BrandProp = {
    itens: Array<Brand>;
}

export function Brand(props: BrandProp){
    <div className="brands">

        <ul>
           
                props.itens.map(item => {
                    return{
                        <li><img src={item.source} alt={item.alt} /></li>
                   )
           })}     
            
        </ul>
    </div>
    )
}