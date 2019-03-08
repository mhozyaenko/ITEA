import Worker from './fabric';
import employees from './employees';

employees.forEach(item => {
    Worker(item);
});
