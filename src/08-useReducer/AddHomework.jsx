import { useForm } from '../hooks/useForm';
import { FormAdd } from './';

export const AddHomework = ({ onNewHomework }) => {
    const { description, handleInputChange, onResetForm } = useForm({
        description: ''
    });

    const submitHomework = (e) =>{
        e.preventDefault();
        
        if (description.length <= 1) return;

        const newHomework = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewHomework( newHomework );
        onResetForm();
    }
    
    return (
        <>
            <FormAdd
                submitHomework = {submitHomework}
                description = {description}
                handleInputChange = {handleInputChange}
            />
        </>
    )
}
