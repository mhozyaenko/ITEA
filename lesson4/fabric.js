import {
    BackendDeveloper,
    FrontendDeveloper,
    Designer,
    ProjectManager
} from './composition';

    const makeEmployee = (state) => {
        let Employee;
        switch (state.type) {
            case 'backend': {
                Employee = BackendDeveloper;
                break;
            }
            case 'frontend': {
                Employee = FrontendDeveloper;
                break;
            }
            case 'design': {
                Employee = Designer;
                break;
            }
            case 'project': {
                Employee = ProjectManager;
                break;
            }
            default: {
                Employee = null;
            }
        }
        return Employee(state);
    }
    const render = (state) => {
        let root = document.getElementById('root');
        let node = document.createElement('div');
        node.innerHTML = `
        <h3>${state.name}(${state.age})</h3>
        <p>${state.type}</p>
        <button class="hireBtn" type="button">Hire</button>
`;
        node.style.display = 'flex';
        node.style.justifyContent = 'space-between';
        node.style.alignItems = 'center';
        node.style.borderBottom = '1px solid #555';
        root.appendChild(node);
        let hireBtn = node.querySelector('.hireBtn');
        hireBtn.onclick = () => {
            alert(`${state.name} hired!`);
        };
    }

    const Worker = (worker) => {
        const state = worker;
        return Object.assign(
            makeEmployee(state),
            render(state));
    };

export default Worker;