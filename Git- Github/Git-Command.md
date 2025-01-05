Flow of the git 
--

    (1) Creating git directories (git init) ---> (2) staging area (git add) --->  (3)Repo (git commit) ---> (4) github (git push)


( 1 ) Creating the git directories
--
1. command :

    - open the terminal in the folder you wnat to make as git directorie
        
            git init

    - crete the git folder inside the current working directory.
    - now any changes inside this directory is monitored.

2. command  
    - run the command to see the edited files 

            git status


( 2 ) Staging
--

* Create the files inside the fot repoitory. { say Mahi-1 , Mahi-2 }
* ehaen you save the files it appers green  with " U " means these file are yeat to stage.
* after the stageing the file apperar with "A" means these file are added to the staging area. 

3. command

    - open the integrated terminal inside the current working directorie.
    - add the name of file you want to stage in the command eg.

            git add Mahi-1.txt Mahi-2.txt
            OR
            git add .

    - " git add . " means all the updated files get staged in one go.

4. command
    
    - to see the status odf file use command:

            git status


( 3 ) Commit
--

* the git commit is uded to add the code to the repository

5. command
        
    -  Use this command to commit the code.

            git commit -m "messege"

    - To give the messege is very importat in the command. 

6. command

    - to view all the commit in the code uou can use the command : 

            git log

( 4 ) github push
--
1. Command

    - for this the connection between the git and github repositiory should be initilized first.
    - ou ca push the codeto the remote repositiory with the command

            git push



Additionals
--

- .gitignore

    - when you dont want commit certain files to the to the fit you can create the file ".gitignore"
    - you want write the name of any fille and folder you dont want to commit.

- .gitkeep
    
    - usualy empty folder are inored by the git.
    - in cases where you want to add the data to the folder in the future but currently folder is empty you can create the ".gitkeep" file inside the root directory.
    - with folder with the ".gitkeep" file is get monitored bythe git
    - the "gitkeep" folder is empty itself , you dont have to write somthing in the files.  





Branches
--

1. to cheack the  current branch

    - to cheack the branch name you must have to commit some code first.
    - to cheack the current branche

            git branch

    - main branch is also known as main brach OR master branche

2. create a new branch

    - to create the different branch

            git branch <name of branch> 

    - you can create a different branch apart from master branch

3. changing the branch 

    - you can change the branch by the command:

            git switch <name of the branch>
        
4. cheackout the branches

    - you can cheackout hte branches by the command:

            git cheackout <branch name>
    
    - to cheackout a branch you must have crated the branch initaly.

5. merging the branches ( fast foward merging )

    - in this the work is done in ulternate branches
    - if you want to merge the ultenate and master branch you can use the command

            git merge <branch name>

    - to use this command you should be in the  main branch

6. Merging the branch ( Not the fast forwarding merging )

    - in this merging the work is done in both altenating and main branch 
    
            git merge <branch name>

    - in not d=fast forward merging is used when the conflict is occured
    - you have to solve the conflict manualy
    - in the conflict meny afer sloving the conflict yu shold delelte the all the extras.
    - afer the resloution you should use the coommand

            git add .
            git commit -m "messege hear"

    - you conflict is resolved.
    - ultenate brnch is meged to the main branch.

7. Rename the branch

    - you can rename thee branch using the command

            git branch -m <old name> <new - name>


8. delete the branch

    - you can delete the branch using th command

            git branch -d <branch name>

    
9. list of branches

    - you can also view the complete branches list using the command

            git branch


git diff
--


1. comparison between staging area

    - this command gives the changes in code between intital files and file you stages after the changes.

            git diff --staged

2. comparison betweenn the branches

    - this command  is used to compare the changes between the changes of branches

            git diff <barnch-1> <branch-2>
            OR
            git diff banch-1..branch-2

3. comparision of specific commit

    - you can compare specific commit of file using the commit hash

            git diff <hash-1> <hash-2>
            OR
            git diff hash-1..hash-2


git stash
--

1. stash a changes

    - you can stash the changes before swtch the branch without committing the chages using command.

            git stash 

2. stash the changes with the name

    - you can also stash many changes by giving the each stash a particular name.

            git stash sve <stash name>

3. view the stash list

    - you can view the stash list using the command

            git stash list
    
 4. apply the stash

    - you can also apply the stash to the code using the command

            git stash apply

5. apply the  particular stash

    - you can also apply any particular stash to the code using the command
    - you can se the satch number tuing the commnad

            git stach list

    - you cn apply that numbered stah using command

            git stash apply stash @{-}

6. apply and drop the stach

    - in canses you want to apply the stash and also remove the stash from the stash list tou an use the ommand:

            git stash pop 

7. droping the stash

    - you can drop the stash without appling t the code using the command:

            git stash drop

8. Applying stash to the particular branch 

    - you can apply the stash to the particularto any branch using the command:

            git stash apply stash@{-} <branch-name> 


Git tag 
--

1. creating a git tag

    - you can create a tag using the command

            git tag <tag-name>
    
    - this tag is attached to the any particular commit.

2. create anotate tag 

    - anotate tag means you can add the additional meta tag

    - you can add the anotate tag in the code using the command


            git tag -a <tag-name> -m <addition data/ messege>


3. list of all tag

    - you can create a number of tag in the code
    - you can view the list of tahg in the code using the command:

            git tag

4. tag a specific tag

    - you can create a specific tag  to a partcular commit using the command

            git tag <tag-name> <commit-hash> 


Git rebase
--

1. switch to the branch you want to rebase

    - it is must that you should be at the ultenaate nranch branch you want to rebase
    - command you can use with te rebase is

            git switch <ulterna-branch>


2. use the rebase

    - to rebase the ullternate brranch use teh command

            git rebase maste

    - if the conflict arrives you can resolve the conflict 

Git reflog
--

1. view the reflog

     - you can view the history of log using the command

            git reflog

2. find any commit

    - you can find any particular commit using the command:

            git reflog <commit-hash>

3. recove lost commit and changes

    - in case you mess up you can reset the code agin to any last commit you made.
    - this si very helpfull in the incases of code brackdown
    - you can achieve this using teh command:

            git reflog <ccommit-hash> 
            git restet --hard <commit-hash>
    
    - use this command carefully because this command in ir- resvesible.