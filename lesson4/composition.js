const MakeBackendMagic = state => ({
    makeBackendMagic: () => console.log(`${state.name} is making Backend Magic`)
});
const MakeFrontendMagic = state => ({
    makeFrontendMagic: () => console.log(`${state.name} is making Frontend Magic`)
});
const MakeItLooksBeautiful = state => ({
    makeItLooksBeautiful: () => console.log(`${state.name} is making it look beautiful`)
});
const DrinkSomeTea = state => ({
    drinkSomeTea : (cups) => console.log(`${state.name} needs to drink ${cups} of tea`)
});
const DistributeTasks = state => ({
    distributeTasks : () => console.log(`${state.name} is distributing tasks`)
});
const WatchYoutube = state => ({
    watchYoutube : () => console.log(`${state.name} is watching youtube`)
});
const Procrastinate = state => ({
    procrastinate : () => console.log(`${state.name} is procrastinating`)
});

export const BackendDeveloper = employee => {
    const state = employee;
    return Object.assign(
        {},
        state,
        MakeBackendMagic(state),
        DrinkSomeTea(state),
        Procrastinate(state)
    )
}
export const FrontendDeveloper = employee => {
    const state = employee;
    return Object.assign(
        {},
        state,
        MakeFrontendMagic(state),
        DrinkSomeTea(state),
        WatchYoutube(state)
    )
}
export const Designer = employee => {
    const state = employee;
    return Object.assign(
        {},
        state,
        MakeItLooksBeautiful(state),
        WatchYoutube(state),
        Procrastinate(state)
    )
}
export const ProjectManager = employee => {
    const state = employee;
    return Object.assign(
        {},
        state,
        DistributeTasks(state),
        Procrastinate(state),
        DrinkSomeTea(state)
    )
}
