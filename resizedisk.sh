# Description: This script resizes the disk partitions and filesystems on a Linux system.
# Usage: Run this script with root privileges to resize the partitions and filesystems.     
#!/bin/bash
lsblk
sudo growpart /dev/nvme0n1 4
sudo lvextend -l +50%FREE /dev/RootVG/rootVol
sudo lvextend -l +50%FREE /dev/RootVG/varVol
sudo xfs_growfs /
sudo xfs_growfs /var