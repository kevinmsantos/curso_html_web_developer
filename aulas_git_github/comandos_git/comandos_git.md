## Comandos Git 

- git config --global user.name "nome_usuario"
- git config --global user.email "email_usuario"
- git config --list
- git config --global --unset 
- git init
- git add 
- git commit -m"mensagem para identificar a alteracao"
- git status
- git remote add origin endereco_do_repositorio_remoto
- git remote -v (lista repositorios cadastrados)
- git push origin master
- git pull origin master (comando utilizado para atualizar o repositorio local com as alteracoes realizadas no repositorio remoto)
- git clone endereco_repositorio_a_ser_clonado
- git remote set-url origin new_url

COMANDOS PARA REMOVER SUBMODULO

- git rm --cached nome_submodulo
- git -rf .git/modules/nome_submodulo
- git commit -m"removendo submodulo nome_submodulo"
- git push origin master (subindo alterações para o repositorio remoto)