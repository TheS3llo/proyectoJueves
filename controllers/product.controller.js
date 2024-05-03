export const products = (resq, res) =>{
        res.status(200).json({
        success: true,
        date: [
            {
                subject: "programacion v",
                description: "mi primer api",
                hora: "20:00 pm",
                semestre: "7",
                date: new Date().toDateString(),
            }
        ],
    });
};
