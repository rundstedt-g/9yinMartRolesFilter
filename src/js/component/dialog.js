define(['knockout',"ojs/ojmodule-element-utils","ojs/ojcontext","component/dialog/roleContentDialog","ojs/ojdialog"],
    function(ko,ModuleElementUtils,Context,RoleContentDialogViewModel){
        baseViewPath = "views/component/dialog/";

        async function roleContentDialogOpen(id,name,price,serverName,serverId,gender,school,grade,neigongyanxiu,status){
            const view = await ModuleElementUtils.createView({viewPath:  baseViewPath + 'roleContentDialog.html'});
            const viewModel = new RoleContentDialogViewModel(id,name,price,serverName,serverId,gender,school,grade,neigongyanxiu,status);
            const dialog = view[0];
            document.body.appendChild(dialog);
            ko.applyBindings(viewModel, dialog);

            const busyContext = Context.getContext(dialog).getBusyContext();
            busyContext.whenReady().then(() => {
                viewModel.connected(dialog);
                dialog.open();
            });

            return new Promise((resolve, reject) => {
                function onDialogOjClose() {
                    viewModel.disconnected();
                    dialog.removeEventListener('ojClose', onDialogOjClose);
                    ko.cleanNode(dialog);
                    document.body.removeChild(dialog);
                }
                dialog.addEventListener('ojClose', onDialogOjClose);
            });
        }
        return roleContentDialogOpen;
    }
)