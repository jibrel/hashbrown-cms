'use strict';

module.exports = (_, model, state) =>

_.div({class: 'list-item--user'},
    _.div({class: 'list-item--user__body'},
        _.popup({
            icon: 'ellipsis-v',
            role: 'item-menu',
            options: HashBrown.Context.user.id === model.id ? {
                'Edit': _.onClickEdit
            } : {
                'Edit': _.onClickEdit,
                'Delete': _.onClickDelete,
            }
        }),
        _.h3({class: 'list-item--user__name'},
            (model.fullName || model.username || model.email || model.id) + (model.id == HashBrown.Context.user.id ? ' (you)' : '')
        ),
        _.div({class: 'list-item--user__type'},
            _.if(model.isAdmin,
                _.span({class: 'list-item--user__type__icon fa fa-black-tie'}),
                'Admin'
            ),
            _.if(!model.isAdmin,
                _.span({class: 'list-item--user__type__icon fa fa-user'}),
                'Editor'
            )
        )
    )
)
