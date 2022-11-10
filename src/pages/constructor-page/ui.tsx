import React, {useState} from "react";
import {Header} from "widgets";
import {InputCheckBox, InputRadioBtn} from "shared";

interface ISizePizza {
    size: string;
}

export const ConstructorPage = () => {
    const [sizePizza, setSizePizza] = useState<ISizePizza>({
        size: "35 см",
    });

    const [doughtPizza, setDoughtPizza] = useState<string>('тесто');

    const handlerChangeSizePizza = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const size = event.target.value;

        setSizePizza({
            ...sizePizza,
            size,
        });
    };

    const handlerChangeDoughtPizza = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const dought = event.target.value;

        setDoughtPizza(dought);
    };


    const arrayCheese = ["Моцарелла", "Чеддер", "Дор Блю"];
    const arrayDoughtPizza = [
        'Тонкое', 'Пышное',
    ];

    const arraySauces = [
        'Томатный', 'Майонез', 'Острый', 'Грибной', 'Чесночный',
        'Кисло-сладкий', 'Горчичный'
    ];

    const [sauce, setSauce] = useState('Томатный');

    const handlerChangeSauce = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSauce(e.target.value)
    }

    return (
        <div>
            <Header/>
            <h1>Собери свою пиццу</h1>
            <div>
                <img src="" alt="board"/>
            </div>
            <h2>Твоя пицца</h2>
            <div>
                {sizePizza.size} на {doughtPizza} тесте {sauce} соус
            </div>
            <div>
                соусы:
            </div>
            <div>
                <div>Размер:</div>
                <div>
                    <input
                        type="radio"
                        id="size30"
                        name="pizza-size"
                        value="30 см"
                        checked={sizePizza.size === "30 см"}
                        onChange={handlerChangeSizePizza}
                    />
                    <label htmlFor="size30">30 см</label>
                    <input
                        type="radio"
                        id="size35"
                        name="pizza-size"
                        value="35 см"
                        checked={sizePizza.size === "35 см"}
                        onChange={handlerChangeSizePizza}
                    />
                    <label htmlFor="size35">35 см</label>
                </div>
            </div>
            <div>
                <div>тесто</div>
                <div>
                    {arrayDoughtPizza.map((dought, idx) =>
                        <InputRadioBtn
                            key={idx}
                            selectedItem={doughtPizza}
                            item={dought}
                            onChange={handlerChangeDoughtPizza}
                        />
                    )}
                </div>
            </div>
            <div>
                <div>Выберите соус</div>
                <div>
                    {arraySauces.map((sauceItem, idx) =>
                        <InputRadioBtn
                            key={idx}
                            selectedItem={sauce}
                            item={sauceItem}
                            onChange={handlerChangeSauce}
                        />
                    )}
                </div>
            </div>
            <div>Добавьте сыр</div>
            <div>3 сыра на выбор</div>
            <div>Добавьте овощи</div>
            <div>здесь должно быть 7 штук</div>
            <div>Добавьте мясо</div>
            <div>здесь должно быть 5 штук</div>
            <InputCheckBox/>
        </div>
    );
};
