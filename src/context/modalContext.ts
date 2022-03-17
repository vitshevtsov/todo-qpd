import { createContext } from 'react';

// interface IModalContext {
//     isAddTaskOpen: boolean;
//     isAddCategoryOpen: boolean;
//     toggleAddTaskOpen: () => void;
//     toggleAddCategoryOpen: () => void;
// }

// const [isAddTaskOpen, setAddTaskOpen] = useState(false);
// const [isAddCategoryOpen, setAddCategoryOpen] = useState(false);

const ModalContext = createContext(null);

export default ModalContext;
