Ext.define('Touch2Demo.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
	routes: {
	    '': 'showMenuIniciar',
	    'index.html': 'showColetasList'
	},
	refs: {
	    coletasForm: {
		xtype: 'coletasform',
		selector: 'coletasform',
		autoCreate: true
	    },
	    coletasList: {
		xtype: 'coletasList',
		selector: 'coletasList',
		autoCreate: true
	    },
	    menuIniciar: {
		xtype: 'menuIniciar',
		selector: 'menuIniciar',
		autoCreate: true
	    },
	    sincronizar: {
		xtype: 'Sincronizar',
		selector: 'Sincronizar',
		autoCreate: true
	    },
	    sincronizarForm: {
		xtype: 'SincronizarForm',
		selector: 'SincronizarForm',
		autoCreate: true
	    },
	    Configuracoes: {
		xtype: 'configuracoes',
		selector: 'configuracoes',
		autoCreate: true
	    },
	    contatosList: {
		xtype: 'contatosList',
		selector: 'contatosList',
		autoCreate: true
	    },
	    contatosForm: {
		xtype: 'contatosForm',
		selector: 'contatosForm',
		autoCreate: true
	    },
	    teste: {
		xtype: 'teste',
		selector: 'teste',
		autoCreate: true
	    },
	    verificacao: {
		xtype: 'verificacao',
		selector: 'verificacao',
		autoCreate: true
	    },
	    sair: {
		xtype: 'sair',
		selector: 'sair',
		autoCreate: true
	    },
	    salvarColetaBtn: 'button[action=salvarColeta]',
	    salvarCampoOcultoBtn: 'button[action=salvarColeta]',
	    salvarCampoOcultoPneuBtn: 'button[action=salvarColeta]',
	    salvarContatoBtn: 'button[action=salvarContato]',
	    salvarIpBtn: 'button[action=salvarIP]',
	    loginBtn: 'button[action=login]',
	    deletarColetaBtn: 'button[action=deletarColeta]',
	    deletarContatoBtn: 'button[action=deletarContato]',
	    sincronizarBtn: 'button[action=sincronizar]',
	    sincronizarPneuBtn: 'button[action=sincronizar]',
	    sincronizarColetaBtn: 'button[action=sincronizar]',
	    sincronizarServicoBtn: 'button[action=sincronizar]',
	    apagarSincronizarClientesBtn: 'button[action=sincronizar]',
	    apagarSincronizarPneuBtn: 'button[action=sincronizar]',
	    apagarSincronizarServicoBtn: 'button[action=sincronizar]',
	    ToolbarFormColeta: '#toolbarFormColeta',
	    ToolbarFormContato: '#toolbarFormContato',
	    showConfiguracoesBtn: 'button[action=configurar]'
	},
	control: {
	    'button[action=voltarColetasList]': {
		tap: 'showColetasList'
	    },
	    'button[action=menuIniciar]': {
		tap: 'showMenuIniciar'
	    },
	    'button[action=novaColeta]': {
		tap: 'showColetasForm'
	    },
	    'button[action=listaColetas]': {
		tap: 'showColetasList'
	    },
	    'button[action=contatosList]': {
		tap: 'showContatoList'
	    },
	    'button[action=contatosForm]': {
		tap: 'showContatosForm'
	    },
	    'button[action=teste]': {
		tap: 'teste'
	    },
	    'button[action=sair]': {
		tap: 'sair'
	    },
	    coletasList: {
		itemtap: 'showColetasForm'
	    },
	    contatosList: {
		itemtap: 'showContatosForm'
	    },
	    salvarColetaBtn: {
		tap: 'salvarColeta'
	    },
	    salvarCampoOcultoBtn: {
		tap: 'salvarCampoOculto'
	    },
	    salvarCampoOcultoPneuBtn: {
		tap: 'salvarCampoOcultoPneu'
	    },
	    salvarContatoBtn: {
		tap: 'salvarContato'
	    },
	    salvarIpBtn: {
		tap: 'salvarIP'
	    },
	    deletarColetaBtn: {
		tap: 'deletarColeta'
	    },
	    deletarContatoBtn: {
		tap: 'deletarContato'
	    },
	    sincronizarBtn: {
		tap: 'sincronizarContatos'
	    },
	    sincronizarPneuBtn: {
		tap: 'sincronizarPneu'
	    },
	    sincronizarColetaBtn: {
		tap: 'sincronizarColeta'
	    },
	    sincronizarServicoBtn: {
		tap: 'sincronizarServico'
	    },
	    apagarSincronizarClientesBtn: {
		tap: 'apagarSincronizarClientes'
	    },
	    apagarSincronizarPneuBtn: {
		tap: 'apagarSincronizarPneu'
	    },
	    apagarSincronizarServicoBtn: {
		tap: 'apagarSincronizarServico'
	    },
	    loginBtn: {
		tap: 'login'
	    },
	    showConfiguracoesBtn: {
		tap: 'showConfiguracoes'
	    },
	    'selectfield[name=idPneu]': {
		change: 'onSelecaoPneuServico'
	    }
	}
    },
    showConfiguracoes: function () {
	Ext.Viewport.setActiveItem(this.getConfiguracoes());
    },
    teste: function () {
	Ext.Viewport.setActiveItem(this.getTeste());
    },
    showMenuIniciar: function () {
	Ext.Viewport.setActiveItem(this.getMenuIniciar());
    },
    showSincronizarForm: function () {
	Ext.Viewport.setActiveItem(this.getSincronizarForm());

    },
    showColetasList: function () {
	var store = Ext.getStore('usuarioLogado_s');
	var t = 0;
	store.each(function () {
	    arquivo = store.data.get(t);
	    t++;
	});
	if (t <= 0) {
	    Ext.Msg.alert('login', 'sem usuario logado', Ext.emptyFn);
	    this.teste();
	} else {
	    Ext.Viewport.setActiveItem(this.getColetasList());
	}
    },
    showContatoList: function () {
	var store = Ext.getStore('usuarioLogado_s');
	var t = 0;
	store.each(function () {
	    arquivo = store.data.get(t);
	    t++;
	});
	if (t <= 0) {
	    Ext.Msg.alert('login', 'sem usuario logado', Ext.emptyFn);
	    this.teste();
	} else {
	    Ext.Viewport.setActiveItem(this.getContatosList());
	}
    },
    showSincronizar: function () {
	Ext.Viewport.setActiveItem(this.getSincronizar());
    },
    showColetasForm: function (view, index, target, record, evt, opts) {


	var store = Ext.getStore('usuarioLogado_s');
	var t = 0;
	store.each(function () {
	    arquivo = store.data.get(t);
	    t++;
	});
	if (t <= 0) {
	    Ext.Msg.alert('login', 'sem usuario logado', Ext.emptyFn);
	    this.teste();
	} else {
	    if (record && record.data) {
		this.getColetasForm().setRecord(record);
		this.getToolbarFormColeta().setTitle(record.get('nome'));
		this.getDeletarColetaBtn().show();
	    } else {
		this.getColetasForm().reset();
		this.getColetasForm().setRecord(null);
		this.getToolbarFormColeta().setTitle('Criando novo contato');
		this.getDeletarColetaBtn().hide();
	    }
	    Ext.Viewport.setActiveItem(this.getColetasForm());
	}
    },
    showContatosForm: function (view, index, target, record, evt, opts) {
	if (record && record.data) {
	    this.getContatosForm().setRecord(record);
	    this.getToolbarFormContato().setTitle(record.get('nome'));
	    // this.getDeletarContatoBtn().show();
	} else {
	    this.getContatosForm().reset();
	    this.getContatosForm().setRecord(null);
	    this.getToolbarFormContato().setTitle('Criando novo contato');
	    this.getDeletarContatoBtn().hide();
	}
	Ext.Viewport.setActiveItem(this.getContatosForm());
    },
    apagarSincronizarClientes: function () {
	var store = Ext.getStore('Contatos');
	store.load();
	var j = 0;
	store.each(function () {
	    var record = store.data.getAt(j);
	    store.remove(record);
	});
	j++;
    },
    sincronizarContatos: function () {
	var total = 0;
	Ext.onReady(function () {
	    var store = Ext.create('Touch2Demo.store.Sincronizar_S');
	    var i = 0;
	    store.on('load', function (s) {
		s.each(function () {
		    arquivo = s.data.get(i);
		    cod_cli = arquivo.data.cod_cli;
		    nome = arquivo.data.nome;
		    cpf = arquivo.data.cpf;
		    telefone = arquivo.data.telefone;
		    endereco = arquivo.data.endereco;
		    login = arquivo.data.login;
		    senha = arquivo.data.senha;


		    var contato = Ext.create('Touch2Demo.model.Contato', {
			cod_cli: cod_cli,
			nome: nome,
			cpf: cpf,
			telefone: telefone,
			endereco: endereco,
			login: login,
			senha: senha

		    });
		    var storeSalva = Ext.create('Touch2Demo.store.Contato');
		    storeSalva.add(contato);
		    storeSalva.sync();
		    i++;
		    total++;
		});
	    });
	});
	Ext.Msg.confirm(
		'Sincronização',
		'Deseja sincronizar os contatos?',
		function (btn) {
		    if (btn == 'yes') {
			location.reload();
		    }
		},
		this
		);
    },
    apagarSincronizarPneu: function () {
	var store = Ext.getStore('Pneu_s');
	store.load();
	var j = 0;
	store.each(function () {
	    var record = store.data.getAt(j);
	    store.remove(record);
	});
	j++;


    },
    sincronizarPneu: function () {
	var total = 0;
	Ext.onReady(function () {
	    var store2 = Ext.create('Touch2Demo.store.SincronizarPneu_s');
	    var i = 0;
	    store2.on('load', function (s2) {
		s2.each(function () {
		    arquivo = s2.data.get(i);
		    cod_pneu = arquivo.data.cod_pneu;
		    modelo = arquivo.data.modelo;
		    medida = arquivo.data.medida;
		    marca = arquivo.data.marca;
		    todos = modelo + '  |  ' + medida + '  |  ' + marca;
		    var pneu = Ext.create('Touch2Demo.model.Pneu_m', {
			cod_pneu: cod_pneu,
			modelo: modelo,
			medida: medida,
			marca: marca,
			todos: todos
		    });
		    var salvaPneu = Ext.create('Touch2Demo.store.Pneu_s');
		    salvaPneu.add(pneu);
		    salvaPneu.sync();
		    i++;
		    total++;
		});
	    });
	});
    },
    apagarSincronizarServico: function(){
	var store = Ext.getStore('Servico_s');
	store.load();
	var j = 0;
	store.each(function () {
	    var record = store.data.getAt(j);
	    store.remove(record);
	});
	j++;
    },
    
    sincronizarServico: function () {
	Ext.onReady(function () {
	    var store = Ext.create('Touch2Demo.store.sincronizarServico_s');
	    var i = 0;
	    store.on('load', function (s) {
		s.each(function () {
		    var record = s.data.get(i);
		    var servico = Ext.create('Touch2Demo.model.Servico_m', {
			codServico: record.data.cod_servico,
			servicoTipo: record.data.servico_tipo,
			pneuModelo: record.data.pneu_modelo,
			servicoCategoria: record.data.servico_categoria,
			servicoSubgrupo: record.data.servico_subgrupo,
			servicoGrupo: record.data.servico_grupo,
			pneuMedida: record.data.pneu_medida
		    });
		    var salvaServico = Ext.create('Touch2Demo.store.Servico_s');
		    salvaServico.add(servico);
		    salvaServico.sync();
		    i++;
		});
	    });
	});
    },
    sincronizarColeta: function () {
	var store = Ext.getStore('Coletas');
	var a = 0;
	store.each(function () {
	    var record = store.data.get(a);
	    var codCliente = record.data.codCliente;
	    var codPneu = record.data.codPneu;
	    var data_entrega = record.data.data_entrega;
	    var observacao = record.data.observacao;
	    var n_fogo = record.data.n_fogo;
	    var n_serie = record.data.n_serie;
	    var servico = record.data.servico;
	    var codFunc = record.data.codFunc;

	    var coleta = Ext.create('Touch2Demo.model.sincronizarColeta_m', {
		codCliente: codCliente,
		codPneu: codPneu,
		data_entrega: data_entrega,
		observacao: observacao,
		n_fogo: n_fogo,
		n_serie: n_serie,
		servico: servico,
		codFunc: codFunc
	    });
	    var salvarColeta = Ext.create('Touch2Demo.store.sincronizarColeta_s');
	    salvarColeta.add(coleta);
	    a++;
	});
	var store2 = Ext.getStore('Coletas');
	store2.load();
	var j = 0;
	store2.each(function () {
	    var record1 = store2.data.getAt(j);
	    store.remove(record1);
	});
	j++;
//	salvarColeta.sync();
    },
    salvarColeta: function () {
	var form = this.getColetasForm(),
		coleta = Ext.create('Touch2Demo.model.Coleta', form.getValues()),
		store = Ext.getStore('Coletas');
	if (form.getRecord() !== null) {
	    var record = store.findRecord('id', form.getRecord().getId());
	    record.set(form.getValues());
	    Ext.Msg.alert('Alterando coleta', 'Coleta alterada com sucesso.', Ext.emptyFn);
	} else {
	    store.add(coleta);
	    Ext.Msg.alert('Criando coleta', 'Coleta criada com sucesso.',
		    function (btn) {
			if (btn == 'ok') {
			    location.reload();
			}
		    },
		    this
		    );
	}
	this.showColetasList();
    },
    salvarCampoOculto: function () {
	var store1 = Ext.getStore('Coletas');
	var record1 = store1.last();
	id_nome = record1.data.idCliente;
	nome_cliente = record1.data.nomeCliente;
	var store = Ext.getStore('Contatos');
	arquivo = store.data.get(id_nome);
	nome = arquivo.data.nome;
	cod_cliente = arquivo.data.cod_cli;

	if (nome_cliente == null) {
	    var store1 = Ext.getStore('Coletas');
	    var record1 = store1.last();
	    record1.set('nomeCliente', nome);
	    record1.set('codCliente', cod_cliente);
	    store1.sync();
	} else {
	    var form = this.getColetasForm();
	    var store12 = Ext.getStore('Coletas');
	    var record12 = store12.findRecord('id', form.getRecord().getId());
	    record12.set('nomeCliente', nome);
	    record12.set('codCliente', cod_cliente);
	    store12.sync();
	}
	var store10 = Ext.getStore('usuarioLogado_s');
	var record10 = store10.last();
	codFunc = record10.data.codFunc;
	var store11 = Ext.getStore('Coletas');
	var record11 = store11.last();
	codFunc2 = record11.data.codFunc;
	if (codFunc2 == null) {
	    var store1 = Ext.getStore('Coletas');
	    var record1 = store1.last();
	    record1.set('codFunc', codFunc);
	    store1.sync();
	} else {
	    var form = this.getColetasForm();
	    var store12 = Ext.getStore('Coletas');
	    var record12 = store12.findRecord('id', form.getRecord().getId());
	    record12.set('codFunc', codFunc);
	    store12.sync();
	}
    },
    salvarCampoOcultoPneu: function () {
	var store = Ext.getStore('Coletas');
	var record = store.last();
	id_pneu = record.data.idPneu;
	codPneu = record.data.codPneu;
	var store2 = Ext.getStore('Pneu_s');
	arquivo = store2.data.get(id_pneu);
	cod_pneu = arquivo.data.cod_pneu;
	console.log(cod_pneu);
	if (codPneu == null) {
	    var store3 = Ext.getStore('Coletas');
	    var record3 = store3.last();
	    record3.set('codPneu', cod_pneu);
	    store3.sync();
	} else {
	    var form = this.getColetasForm();
	    var store4 = Ext.getStore('Coletas');
	    var record4 = store4.findRecord('id', form.getRecord().getId());
	    record4.set('codPneu', cod_pneu);
	    store4.sync();
	}
    },
    salvarContato: function () {
	var form = this.getContatosForm(),
		coleta = Ext.create('Touch2Demo.model.Contato', form.getValues()),
		store = Ext.getStore('Contatos');
	if (form.getRecord() !== null) {
	    var record = store.findRecord('id', form.getRecord().getId());
	    record.set(form.getValues());
	    Ext.Msg.alert('Alterando Contato', 'Contato alterada com sucesso.', Ext.emptyFn);
	} else {
	    store.add(coleta);
	    Ext.Msg.alert('Criando Contato', 'Contato criada com sucesso.', Ext.emptyFn);
	}

	this.showContatoList();
    },
    salvarIP: function () {
	store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	var record = store2.getById(1);
	if (record == null) {
	    var form = this.getConfiguracoes(),
		    ip = Ext.create('Touch2Demo.model.IpSincronizar_m', form.getValues()),
		    store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	    store2.add(ip);
	} else {
	    var form = this.getConfiguracoes(),
		    store2 = Ext.create('Touch2Demo.store.IpSincronizar_s');
	    contatoAtualizado = store2.data.get(1);
	    contatoAtualizado.set(form.getValues());
	    store2.sync();
	}
	location.reload();
    },
    deletarColeta: function () {
	Ext.Msg.confirm(
		'Deletar coleta',
		'Tem certeza que deseja deletar esta coleta?',
		function (btn) {
		    if (btn == 'yes') {
			Ext.getStore('Coletas').remove(this.getColetasForm().getRecord());
			this.showColetasList();
		    }
		},
		this
		);
    },
    deletarContato: function () {
	Ext.Msg.confirm(
		'Deletar contato',
		'Tem certeza que deseja deletar este contato?',
		function (btn) {
		    if (btn == 'yes') {
			Ext.getStore('Contatos').remove(this.getContatosForm().getRecord());
			this.showContatoList();
		    }
		},
		this
		);
    },
    login: function () {
	var form = this.getTeste(),
		coleta = Ext.create('Touch2Demo.model.Contato', form.getValues()),
		login = coleta.data.login,
		senha = coleta.data.senha;
	var store55 = Ext.getStore('Contatos');
	var f = 0;
	store55.each(function () {
	    var arquivo3 = store55.data.get(f);
	    var loginSalvo = arquivo3.data.login;
	    //  if (login = loginSalvo) {
	    console.log(loginSalvo);
	    if (login == loginSalvo) {
		var senhaSalva = arquivo3.data.senha;
		codFunc = arquivo3.data.cod_cli;
		if (senhaSalva == senha) {
		    var verStore = Ext.create('Touch2Demo.store.usuarioLogado_s');
		    var verRecord = verStore.getById(1);
		    if (verRecord == null) {
			var salvarCodFunc = Ext.create('Touch2Demo.model.usuarioLogado_m', {
			    codFunc: codFunc
			});
			var salvarCodFunci = Ext.create('Touch2Demo.store.usuarioLogado_s');
			salvarCodFunci.add(salvarCodFunc);
			Ext.Msg.alert('login', 'Logado com sucesso',
				function (btn) {
				    if (btn == 'ok') {
					location.reload();
				    }
				},
				this
				);
		    } else {
			var store44 = Ext.create('Touch2Demo.store.usuarioLogado_s');
			var codUsuario = store44.data.get(1);
			codUsuario.set('codFunc', codFunc);
			Ext.Msg.alert('login', 'Logado com sucesso',
				function (btn) {
				    if (btn == 'ok') {
					location.reload();
				    }
				},
				this
				);
		    }
		} else {
		    Ext.Msg.alert('login', 'senha incorreta', Ext.emptyFn);
		}
	    } else {
	    }
	    f++;
	});
    },
    verificacao: function () {
	var store = Ext.getStore('usuarioLogado_s');
	var t = 0;
	store.each(function () {
	    arquivo = store.data.get(t);
	    t++;
	});
	if (t <= 0) {
	    Ext.Msg.alert('login', 'sem usuario logado', Ext.emptyFn);
	    this.teste();
	} else {
	    this.showMenuIniciar();
	}
    },
    verificacaoSincronizacao: function () {
	var store = Ext.getStore('Contatos');
	var k = 0;
	store.each(function () {
	    arquivo = store.data.get(k);
	    k++;
	});
	if (k <= 0) {
	    Ext.Msg.alert('Sincronização', 'Não usuarios no banco', Ext.emptyFn);
	    //    this.tela de sincronização
	} else {

	}
    },
    sair: function () {
	var store2 = Ext.getStore('usuarioLogado_s');
	var n = 0;
	store2.each(function () {
	    record2 = store2.data.get(n);
	    n++;
	});
	if (n <= 0) {
	    Ext.Msg.alert('Sair', 'não a usuario logado');
	} else {
	    Ext.Msg.confirm(
		    'Sair',
		    'Tem certesa que deseja sair?',
		    function (btn) {
			if (btn == 'yes') {
			    var store = Ext.create('Touch2Demo.store.usuarioLogado_s');
			    var record1 = store.data.get(1);
			    //console.log(record1);
			    store.remove(record1);
			    location.reload();
			}
		    },
		    this
		    );
	}
    },
    onSelecaoPneuServico: function (field, newValue) {
	var form = field.up('coletasform');
	var servicoField = form.child('selectfield[name=servico]');


	var option = new Array();

	var i = 0;
	var teste = Ext.getStore('Servico_s');
	teste.each(function () {
	    var record = teste.data.get(i + 1);
	    
	    if(record.data.pneuMedida == newValue.data.medida){
	    option[i] = new Object();
	    option[i].text = record.data.pneuMedida;
	    option[i].value = record.data.id;
	    i++;
	    }
	});

//	var teste = Ext.getStore('Servico');
//	teste.each(function () {
//	    var record = teste.data.get(i + 1);
//
//	    if (record.data.medida == 'TODOS' || record.data.medida == newValue.data.medida) {
//		option[i] = new Object();
//		option[i].text = record.data.nome;
//		option[i].value = record.data.id;
//
//		i++;
//	    }
//	});

	servicoField.setOptions(option);
	servicoField.enable();
    }
});
