import dev from './dev';
import prod from './prod';

// TODO: Improve the environment management
export default process.env.NODE_ENV === 'development' ? dev : prod;
