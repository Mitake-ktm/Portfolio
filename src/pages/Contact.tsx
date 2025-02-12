import { useState } from "react"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
    <div>
        <h1>Contact</h1>
        <p>N'hésitez pas à me contacter pour toute opportunité ou besoin.</p>    
    </div>
    )
}

export default Contact