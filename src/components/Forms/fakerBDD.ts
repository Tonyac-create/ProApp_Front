const fakerBDD = {
    users: [
        {
            _id: "lkdso45",
            email: "exemple1@mail.fr",
            password: "exemple1",
            role: "pro",
            validation: 0,
            enterprises: ["MaBoite"],
        },
        {
            _id: "lhkhjt35",
            email: "exemple3@mail.fr",
            password: "exemple3",
            role: "pro",
            validation: 0,
            enterprises: ["MyEnterprise", "NameOfEnt"],
        }, {
            _id: "lkkeozkoo5",
            email: "exemple4@mail.fr",
            password: "exemple4",
            role: "pro",
            validation: 0,
            enterprises: [],
        },
        {
            _id: "ldfgdo82",
            email: "exemple2@mail.fr",
            password: "exemple2",
            role: "apprenti",
            validation: 0,
            enterprises: [],
        }, ,
        {
            _id: "l5fghd2",
            email: "exemple5@mail.fr",
            password: "exemple5",
            role: "apprenti",
            validation: 0,
            enterprises: [],
        }, ,
        {
            _id: "hjyjetyze5et",
            email: "exemple6@mail.fr",
            password: "exemple6",
            role: "apprenti",
            validation: 0,
            enterprises: [],
        }
    ],
    announces: [
        {
            _idAnnounce: "dfgsdr5",
            title: "Titre annonce",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            job: "Lorem ipsum",
            date_of_start: "01/07/2024",
            time: 2, //years
            salary: "",
            isPublish: false,
            student_id: [],
            enterprise_id: ["lhkhjt35"]
        },
        {
            _idAnnounce: "dffqgsdf5",
            title: "Titre annonce",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            job: "Lorem ipsum",
            date_of_start: "01/09/2024",
            time: 1, //year
            salary: 1000,
            isPublish: false,
            student_id: [],
            enterprise_id: ["lkdso45"]
        },
        {
            _idAnnounce: "dffqgsdf5",
            title: "Titre annonce",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            job: "Lorem ipsum",
            date_of_start: "01/09/2024",
            time: 2, //years
            salary: 0,
            isPublish: false,
            student_id: ["l5fghd2"],
            enterprise_id: []
        },
        {
            _idAnnounce: "dffqgsdf5",
            title: "Titre annonce",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            job: "Lorem ipsum",
            date_of_start: "01/08/2024",
            time: 2, //years
            salary: 0,
            isPublish: false,
            student_id: ["ldfgdo82"],
            enterprise_id: []
        }
    ],
    students: [
        {
            _idStudents: "ldfgdo82",
            complete_name: "John Doe",
            address: "1, rue du Yemen 00001 Yemen",
            phone: "0102030405",
            categories: "Apprenti"
        },
        {
            _idStudents: "l5fghd2",
            complete_name: "Jane Dupont",
            address: "1, rue de ma rue 00111 MaVille",
            phone: "0908070605",
            categories: "Stagiaire"
        },
        {
            _idStudents: "hjyjetyze5et",
            complete_name: "Jacques Adit",
            address: "152, avenue du boulevard 05040 City",
            phone: "0103050709",
            categories: "alternant"
        }
    ],
    professionnals: [
        {
            _idEnterprise: "lkdso45",
            enterprise_name: "John Doe",
            address: "1, rue du Yemen 00001 Yemen",
            siret: 123456782103,
            phone: "0102030405",
            categories: "BTP",
            type: "Maçon"
        },
        {
            _idEnterprise: "lhkhjt35",
            enterprise_name: "Jane Dupont",
            address: "1, rue de ma rue 00111 MaVille",
            siret: 123456782103,
            phone: "0908070605",
            categories: "Hôtellerie-Restauration",
            type: "Restaurant"
        },
        {
            _idEnterprise: "lkkeozkoo5",
            enterprise_name: "Jacques Adit",
            address: "152, avenue du boulevard 05040 City",
            siret: 123456782103,
            phone: "0103050709",
            categories: "autre",
            type: "Aérospatial"
        }
    ]
}


export default fakerBDD