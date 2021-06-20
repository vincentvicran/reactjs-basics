const initialState = {
    cards: [
        {
            id: 1,
            title: 'Alex',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam incidunt vitae ipsa repellat minus fugit esse ab? Consequatur deserunt unde hic incidunt. Possimus, adipisci esse corporis beatae eos labore repellendus officiis dicta ad perferendis! Temporibus itaque neque modi voluptas?',
        },
        {
            id: 2,
            title: 'Vidal',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam incidunt vitae ipsa repellat minus fugit esse ab? Consequatur deserunt unde hic incidunt. Possimus, adipisci esse corporis beatae eos labore repellendus officiis dicta ad perferendis! Temporibus itaque neque modi voluptas?',
        },
        {
            id: 3,
            title: 'Messi',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsam incidunt vitae ipsa repellat minus fugit esse ab? Consequatur deserunt unde hic incidunt. Possimus, adipisci esse corporis beatae eos labore repellendus officiis dicta ad perferendis! Temporibus itaque neque modi voluptas?',
        },
    ],
};

const rootReducer = (state = initialState, action) => {
    return state;
};
export default rootReducer;
