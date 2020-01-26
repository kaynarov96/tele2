import React from 'react'


export default function Tarifs(props) {
    return (
            <div className="tarif-infos">
                <div className="tarifs-title">
                    <span>{props.name}</span>
                </div>
                <div className="price-infos">
                    <span>{props.price}</span>
                    <div className="price">
                        <p>P</p>
                        <h4>/{props.priceList}</h4>
                    </div>
                </div>
                <div className="info-wrap">
                    <p><strong>безлимит</strong> на Tele2 <br/>России</p>
                    <p><strong>{props.infoMinute}</strong> мин <br/>{props.infoText}</p>
                    <p><strong>{props.trafic}</strong> ГБ интернета</p>
                </div>
                <div className="card-buttons">
                    <p className="button-sale">Купить SIM</p>
                </div>
            </div>
    )
}