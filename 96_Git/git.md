# Git
Git is a distrubuted version control tool that supports distributed non-linear workflows by providing data assurance for developing quality software 

### Version Control
Version control is the management of changes to a document, computer programs, large web sites, and other collections of information 


# Why version control ?
- Collaboration : Mulitple developers work on a project, each work individually on their local machines. with version control u can see who changes the code.
- Snapshots of all version are properly documented and stored.
- Version are also named accurately.
- Backup : in any case the central server crashes, a backup is always available in your local servers.
- Analyze : Provide when it was changed and u can see entire timeline

## Version control systems available
- GIT ( Open source, Distrubuted version)
- Apache subversion 
- CVS concerent version system ( they don't maintain local copy )
- Mercurial ( similar to GIT )

Google trends stats says Git is always been popular amoung other version control systems

## Github

Github is a repository, Repository is a dataspace, where you store all the project files.
- In Distributed version control system (git), we have (central) Repository and a local repository. 
- we can push and pull the changes to the central repository
- In local repository we can commit and update the working file. 

## What is Git ?
Git is a distrubuted version control tool that supports distributed non-linear workflows by providing data assurance for developing quality software 

## Features of Git
- Distributed
	- Allows distributed development of code
	- Every developer has a local copy of the entire development history and changes are copied from one repository to another
- Compatible 
	- Compatible with exisiting sysmtems & protocols
	- SVN & SVK repositories can be directly accessed using Git-SVN
- Non-linear 
	- Supports non-linear development of software
	- Includes various techniques to naivate & visualize non-linear development history
- Branching 
	- It takes only a few seconds to create and merge branches
	- Master branch always contains production quality code
- Light wieght
	- Uses lossless compression technique to compress data on the client's side.
- Speed
	- Fetching data from local repository is 100 times faster than remote repository 
	- GIT is one order of magniteud faster than other VCS tools 
	- Git uses c languages, a programming language
- Open source
	- You can modify its source code according to your needs. 
- Reliable 
	- On events of system crash, the lost data can be easily recovered from any of the local repository of the collborators.
- Secure
	- Uses SHA1 to name and identify objects/
	- Every files & commit is checksummed and is retrieved by its checksum at time of checkout.
- Econmical
	- Release under GPL's license. It is for free.
	- All heavy lifiting is done on client-side. hence a lot og money can be saved on costly servers. 

What is a Repository ?
A directory or storage space where your projects can live. It can be local to a folder on your computerm or it can be a storage space on Github or another online host. You can keep code files, text files, image files, you name it, inside a repository.

There are two types of repositories:
- Central Repository
- Local Repositroy 

## Central Repository
- Typically located on remote server 

--- continued... 

# Install Git
## Create Repo
- Open ur github acc and create a repo, this is our central repository. 
- Install git in your system
- To create a local rep
	- Create a folder, if Win OS, inside the folder right-click > git bash || in Linux, open the folder, right-click > 'open in terminal'
	- In terminal type ```git init```, a ```.git``` folder will be created as hidden file.

# Syncing Repo
- To collabarate your local repo with central repo, goto the server repo, click on ```Clone or Download```, copy the HTTPS and open terminal
- In terminal, type ```git remote add orgin "Paste the URL here"```

### Git pull
We will fetch the files from central repository into my local repo 

# Making changes 
Git has a concept intermediate layers that resides btw your workspace and local repository now when 
you want commit changes inyour local repo you hafta add those files in the **index** first, so this is the layer that is between your workspace and local repo. if the files are in index, you can't make commit.

- git add : The command ```git add``` lets your add to your index.
- git status : The command ```git status``` Tell's you which files are added to index and are ready to commit
- git commit : The command ```git commit``` It refers to recording snapshots of the repo at a given time. Committed snapshots will never change unless done explicitly.

## git commit
- Create a document, data1.txt in your local repo folder, Open terminal and type ```git status``` you can see the files added to index. you can see a data1.txt is untracked file.
- To add it, type ```git add "file name" -m "your message"
	- ```-m "you need to provide a comment here"```

## Commiting multiple files
- Create multiple text files in your local repo folder, doc2.txt, doc3.txt etc
- Open terminal type ```git status```, see the untracked files with file name doc2....
- to add multiple files to index, type ```git add -A``` and press enter and now see the staus, all the files are added to index.
- to commit multiple files all at once, type ```git commit -a```
- to see how git stores all these commits, type ```git log```

# Parellel developement / Non-linear development - BRANCHING
Branching are pointers to a specific commit

Braches are of two types:
- Local branches : are only create in your workspace that is only going to work with the files in your local repo
- Remote-tracking branches : are the brances that is going to connect your branches from your local repo to your central repo 

## Creating branches
To create a branch, open the terminal, type git branch and type the branch name. ```git branch branchname```
To switch branches, type git checkout and type the branch name. ```git checkout branchname```
To see the files in branches, type ```ls``` it lists out the files in the branch

## Merging
To merge branches, be on your source ( master ), type ```git merge branchname``` 
type ```ls``` on your master branches to see the changes.
Note: even though u merged first branch, first branch is seperate and master is septrate, whatever change u do, based on the current branch it updates 

```git commit -a -m "msg"``` this command adds the files to index and commits chnages to local repo.

```cat``` use this command to open a file.

## Rebasing















