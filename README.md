# Django + React Introduction

This project is broken up into a backend and frontend. The backend contains the Django project which uses the Django Rest Framework to host a simple API. The frontend uses React and queries data from the API.

Run the following commands to get started:

```json
virtualenv env
pip install -r requirements.txt
npm install
npm run build
python manage.py runserver
```

Remove the git repo with this command on mac/linux:

```json
rm -rf .git
```

and this on windows:

```json
rmdir .git
```

---

.
├── articles                   # backend
│   └── api
├── djreact                    # backend
├── public
├── src                        # frontend
│   ├── components
│   ├── containers
│   └── store
│       ├── actions
│       └── reducers
├── .gitignore 
├── manage.py
├── README.md
└── requirements.txt