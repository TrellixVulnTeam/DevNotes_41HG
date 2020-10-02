## Table of contents 
- [Github](#github)
	- [What is version control ?](#what-is-version-control-)
	- [Why version control ?](#why-version-control-)
		- [Version control systems available](#version-control-systems-available)
	- [Features of Git](#features-of-git)
	- [What is a Repository ?](#what-is-a-repository-)
- [Install Git on Linux](#install-git-on-linux)
- [GIT SSH](#git-ssh)
	- [How to Create an SSH Key](#how-to-create-an-ssh-key)
		- [Generate an SSH Key on Mac and Linux](#generate-an-ssh-key-on-mac-and-linux)
	- [Reference](#reference)
	- [Uploading existing project to git](#uploading-existing-project-to-git)
- [Helpers](#helpers)
	- [Setting default push](#setting-default-push)
	- [Git config](#git-config)
		- [git config levels and files](#git-config-levels-and-files)
		- [Writing a value](#writing-a-value)
	- [git commit helper -am, m](#git-commit-helper--am-m)
	- [Git Undo](#git-undo)
		- [Git Undo in Local](#git-undo-in-local)
			- [Undo Staging](#undo-staging)
			- [Undo changes in a file](#undo-changes-in-a-file)
			- [Undo a commit](#undo-a-commit)
			- [Goto a specific commit and use it from there](#goto-a-specific-commit-and-use-it-from-there)
		- [Git Undo in Remote](#git-undo-in-remote)
			- [Git revert](#git-revert)
	- [Git log](#git-log)
	- [Alias](#alias)
	- [Rename, Delete using Git commands](#rename-delete-using-git-commands)
		- [Rename a file](#rename-a-file)
		- [Remove a file](#remove-a-file)
	- [git Ignore](#git-ignore)
	- [git merge](#git-merge)
	- [delete local branch](#delete-local-branch)
	- [delete remote branch](#delete-remote-branch)
	- [git reset](#git-reset)
	- [updating the repo (remote references)](#updating-the-repo-remote-references)
	- [git release tags](#git-release-tags)

# Github
Github is a repository, Repository is a dataspace, where you store all the project files.
- In Distributed version control system (git), we have (central) Repository and a local repository. 
- we can push and pull the changes to the central repository
- In local repository we can commit and update the working file.

## What is version control ?
- Version control is the management of changes to a document, computer programs, large web sites, and other collections of information 

## Why version control ?
- Collaboration : Mulitple developers work on a project, each work individually on their local machines. with version control u can see who changes the code.
- Snapshots of all version are properly documented and stored.
- Version are also named accurately.
- Backup : in any case the central server crashes, a backup is always available in your local servers.
- Analyze : Provide when it was changed and u can see entire timeline

### Version control systems available
- GIT ( Open source, Distrubuted version)
- Apache subversion 
- CVS concerent version system ( they don't maintain local copy )
- Mercurial ( similar to GIT )

Google trends stats says Git is always been popular amoung other version control systems

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

## What is a Repository ?
A directory or storage space where your projects can live. It can be local to a folder on your computerm or it can be a storage space on Github or another online host. You can keep code files, text files, image files, you name it, inside a repository.

There are two types of repositories:
- Central Repository
- Local Repositroy 
 
# Install Git on Linux
1. From your javascript, install Git using apt-get:
```javascript 
  $ sudo apt-get update $ sudo apt-get install git 
```
2. Verify the installation was successful by typing git --version:
3. Configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create:
```javascript
$ git config --global user.name "Emma Paris" 
$ git config --global user.email "eparis@atlassian.com"
```

# GIT SSH
An SSH key is an access credential for the SSH (secure javascript) network protocol. This authenticated and encrypted secure network protocol is used for remote communication between machines on an unsecured open network.

- SSH is used for remote file transfer, network management, and remote operating system access. 
- The SSH acronym is also used to describe a set of tools used to interact with the SSH protocol.
- SSH uses a pair of keys to initiate a secure handshake between remote parties. The key pair contains a public and private key.
-  It is more helpful to think of the public key as a "lock" and the private key as the "key". 
-  You give the public 'lock' to remote parties to encrypt or 'lock' data. This data is then opened with the 'private' key which you hold in a secure place.

## How to Create an SSH Key
SSH keys are generated through a public key cryptographic algorithm, the most common being RSA or DSA. At a very high level SSH keys are generated through a mathematical formula that takes 2 prime numbers and a random seed variable to output the public and private key.

### Generate an SSH Key on Mac and Linux
1. execute the following to begin the key creation
```javascript
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

// rsa - typeEncryption
// 4096 - strengethEncryption 
```
- This command will create a new SSH key using the email as a label
2. You will then be prompted to "Enter a file in which to save the key."
- You can specify a file location or press “Enter” to accept the default file location.
```javascript
Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
```
3. The next prompt will ask for a secure passphrase.
A passphrase will add an additional layer of security to the SSH and will be required anytime the SSH key is used. If someone gains access to the computer that private keys are stored on,
```javascript
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```
- At this point, a new SSH key will have been generated at the previously specified file path.
- files
  - id_rsa (private key)
  - id_rsa.pub (this is the public key, it will be uploaded to github )
  - To print the key in cmd, go to the .ssh folder and type 
```javascript
cat id_rsa.pub
```
- copy the key and add it in github, SSH AND GPG KEYS under settings, click on new sshKeys, enter the name its for ur reference
4. Add the new SSH key to the ssh-agent, to make sure your local command line interface knows about the key u just generated
- The ssh-agent is another program that is part of the SSH toolsuite. The ssh-agent is responsible for holding private keys. Think of it like a keychain. In addition to holding private keys it also brokers requests to sign SSH requests with the private keys so that private keys are never passed around unsecurly.
- Before adding the new SSH key to the ssh-agent first ensure the ssh-agent is running by executing:
```javascript
eval "$(ssh-agent -s)"
// Agent pid 59566
```
- Once the ssh-agent is running the following command will add the new SSH key to the local SSH agent. run the below command.
```javascript
ssh-add -k /Users/you/.ssh/id_rsa
```
- The new SSH key is now registered and ready to use!

## Reference 
[Atlassian Github Install](https://www.atlassian.com/git/tutorials/install-git#linux)

## Uploading existing project to git
1. Create a empty repo in github
2. Copy the ssh text, it will be available once you create a repo
```javascript
git remote add origin *sshtext*
```
- You are connected to remote repo now, 
1. check it by below command, shows any remote repostiories you are connect to. 
```javascript
git remote -v
```

# Helpers

## Setting default push
```javascript
git push -u origin master
```

## Git config 
The most basic use case for git config is to invoke it with a configuration name, which will display the set value at that name. Configuration names are dot delimited strings composed of a 'section' and a 'key' based on their hierarchy. For example: user.email

```javascript
git config user.email
```

### git config levels and files
Before we further discuss git config usage, let's take a moment to cover configuration levels. The git config command can accept arguments to specify which configuration level to operate on. The following configuration levels are available:
1. --local
- By default, git config will write to a local level if no configuration option is passed. Local level configuration is applied to the context repository git config gets invoked in. Local configuration values are stored in a file that can be found in the repo's .git directory: .git/config
2. --global
- Global level configuration is user-specific, meaning it is applied to an operating system user. Global configuration values are stored in a file that is located in a user's home directory. ~ /.gitconfig on unix systems and C:\Users\\.gitconfig on windows
3. --system
- System-level configuration is applied across an entire machine. This covers all users on an operating system and all repos. The system level configuration file lives in a gitconfig file off the system root path. $(prefix)/etc/gitconfig on unix systems. On windows this file can be found at C:\Documents and Settings\All Users\Application Data\Git\config on Windows XP, and in C:\ProgramData\Git\config on Windows Vista and newer.

### Writing a value
Expanding on what we already know about git config, let's look at an example in which we write a value:
```javascript
git config --global user.email "your_email@example.com"
```
- This example writes the value your_email@example.com to the configuration name user.email. It uses the --global flag so this value is set for the current operating system user.


## git commit helper -am, m 
1. git commit -m "mesage" 
2. git commit -am "message" 
- add and commit all the files on one line with this command:

## Git Undo

### Git Undo in Local

#### Undo Staging 
- use ``` git reset <filename> ```

#### Undo changes in a file
- use ``` git checkout <filename>```

#### Undo a commit 
- use ``` git reset HEAD~1 ```
- HEAD means pointer to the last commit
- ~1 means instead of pointing to the last commit, go back one step further
- after undoing a commit, last changes will be unstaged and uncommited

#### Goto a specific commit and use it from there
``` git checkout '<commitId>' ```
- checking out old commit will detach head state 
- It is a read only operation, it means the changes you do and commit will not affect this commit id or the branch
- You will need to checkout -b <newbranch> to retain the changes you made.
- If you want to go back to master/previous branch, use checkout <brancHname/master>


### Git Undo in Remote
#### Git revert
- Git revert takes a specified commit, however, git revert does not move ref pointers to this commit. A revert operation will take the specified commit, inverse the changes from that commit, and create a new "revert commit". The ref pointers are then updated to point at the new revert commit making it the tip of the branch.

1. Use ```git revert <commitID> or git revert HEAD~1  ```
- this will revert the changes you done until commit ID
- instead of removing the commitid from history, it tries to undo the changes that waas intrduced in the commit 


## Git log
1. git log --oneline 
- return logs in oneline
2. -git log --oneline --grep="commit"
- search log with name commit 

## Alias 
Create alias for the commands avaiable 
```javascript
git config --global alias.hist "log --oneline --graph --decorate --all"
```

List the alias commands avaialble
```javascript
git config --global --list
```

## Rename, Delete using Git commands
### Rename a file 
```javascript
git mv example.txt demo.txt
```
### Remove a file 
```javascript
git rm demo.txt
```

## git Ignore
- create .gitignore file
- open the file and type the file name wit extension
- example : *.log (this will ignore all files with .log extension)
- example : <foldername>

## git merge
1. checkout to develop branch or the branch u want to merge
2. then use ```git merge <featureBranch>, this will merge feature branch to develop branch

## delete local branch
```javascript
 git branch -d <branchname>
 ```
## delete remote branch
```javascript
 git push origin :<branchname>
 ```
## git reset 
1. git reset --soft <commitid>
- Soft reset will change the commited tat head is pointin to, 
- It preserves git staging area with our change
2. git reset --hard <commitid>
- this will hard reset to the commit id and now the head is at the commit id
- this will not preserve the changes, it will wipe out the changes
3. ``` git reflog ```
- Reflog will return the all the different action we have take in that repo 
- you will get commitid using git reflog, copy the commit id and use git reset hard to traverse thru the timeline/commitid

## updating the repo (remote references)
1. Below command will update thee remote reference
```git remote set-url origin <github_repo_url>```
2. Get additional info by below command
```git remote show origin```
- lists remote url, branches

## git release tags
1. To add a release tag use the below command
```javascript
git tag -a "<release-version/name>" -m "<message>" <commit>
```
2. Pushing the tag/relase to github
```javascript
git push origin <tagName>

// to push multiple tags
git push --tags
```
3. delete tag in local
```javascript
git tag -d <tagName>
```
4. delete tag in remote from cmd
```javascript
git push origin :<tagName>
```
5. Update existing tag
- update a file, commit and push the changes 
- update the tag by below command
```javascript
// updates exisitn tag
git tag -f <tagName> <commitID> 
```
- to update tag in remote/github
```javascript
git push origin -f <tagName>
```



