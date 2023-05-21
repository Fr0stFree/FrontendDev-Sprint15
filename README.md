

## Mesto
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`. 

### Ссылки на проект

[Адрес репозитория](https://github.com/Fr0stFree/Website-Mesto/)

IP 130.193.36.150

Frontend https://boss.of.this.gym.nomoredomains.monster/

Backend https://api.boss.of.this.gym.nomoredomains.monster/

[![Test](https://github.com/Fr0stFree/Website-Mesto/actions/workflows/tests.yml/badge.svg)](https://github.com/Fr0stFree/Website-Mesto/actions/workflows/tests.yml)

<details>
<summary> Useful commands </summary>

```shell
# static transfer
scp -r ./build/* frostfree@130.193.36.150:/home/frostfree/Website-Mesto/frontend
```
```shell
# ask Nginx politely to serve the static
sudo chown -R $USER:www-data /home/frostfree/Website-Mesto/frontend
```
</details>
