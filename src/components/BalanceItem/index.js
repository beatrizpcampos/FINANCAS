import { useMemo } from "react";
import { Container, Label, Balance } from "./styles";

export default function BalanceItem({ data }){

    const labelName = useMemo( () => {
        if(data.tag === 'saldo'){
            return{
                label: 'Saldo Atual',
                color: '4169E1'
            }
        }else if(data.tag === 'receita'){
            return{
                label: 'Entradas',
                color: '3CB371'
            }
        }else{
            return{
                label: 'Saidas',
                color: 'FF6347'
            }
        }
    }, [data])

    return(
        <Container bg={labelName.color}>
            <Label>{labelName.label}</Label>
            <Balance>R$ {data.saldo}</Balance>
        </Container>
    )
}