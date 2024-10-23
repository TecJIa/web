Vagrant.configure("2") do |web|
    web.vm.box = "ubuntu"
    web.vm.hostname = "web"

    web.vm.synced_folder ".", "/vagrant"
    web.vm.network "forwarded_port", guest: 8080, host: 8080

    web.vm.provision "shell", inline: <<-SHELL
        mkdir -p ~root/.ssh
        cp ~vagrant/.ssh/auth* ~root/.ssh
    SHELL
  end
